

## Crash Nightmare

Some bad memories...

![Bản cập nhật mới khiến Chrome bị crash sau khi tải hoặc chạy extension trên  Windows 10 | TECHRUM.VN](https://photo.techrum.vn/images/2021/05/22/Google-Chrome-Ran-Out-Of-Memory-1200x675e75a8d6edb96003f.png)

## 多进程架构形成

从理论上讲，没有可能构建一个绝不崩溃、100%安全的系统，现代操作系统能够之所以能够保持健壮及稳定得益于其多个应用间的相互隔离，一个应用的崩溃不会影响其他应用及操作系统本身，同理套用至浏览器，现代浏览器为了保持稳定严格的限制从渲染引擎到其他进程的访问，各个进程间各司其职，互不干扰，从而达到内存保护和访问控制的目的



## WebKit、Blink、Chromium&Chrome???

[Webkit](https://zh.wikipedia.org/wiki/WebKit)：严格意义上WebKit和浏览器没有什么大的关系，其本质是一个可以对各类脚本语言进行解析排布的排版引擎，广泛被早期浏览器使用。

[Blink](https://zh.wikipedia.org/wiki/Blink): 其前身即为Webkit,是由Google主导开发的开源浏览器开源引擎，也是Chromium计划的普罗米修斯之火。

[Chromium](https://zh.wikipedia.org/wiki/Chromium): Google主导的开源浏览器软件项目，包含完整的用户界面及Blink渲染引擎、V8引擎等。

![image-20220301225552217](/Users/lot/Library/Application Support/typora-user-images/image-20220301225552217.png)

Chrome： Chrome?  Stable Chromium!



## Chromium基础多进程架构

![image](https://www.chromium.org/developers/design-documents/multi-process-architecture/arch.png)

除去官方列举的主要进程外，还存在GPU进程、资源进程、网络服务进程、音频进程等...

<!--可以通过Chrome的chrome://tracing 工具或者配合拓展应用https://ui.perfetto.dev/来进行浏览器运行过程各个进程线程间的通信及运作情况-->

![image-20220301232915562](/Users/lot/Library/Application Support/typora-user-images/image-20220301232915562.png)

整体上浏览器主进程（Browser）、单tab页渲染进程(Render)、GPU进程、相互独立，保证进程间互不影响，GPU进程有且只有一个保证需要GPU加速场景时的响应速度，各进程通过IPC（Inter-process-communication）进行通信调度，最大程度的保证浏览器应用的稳定性（除去基础的进程模型外，也可以指定其他类型的进程模型，甚至你也可以只创建一个Browser主进程完成上述所有进程的工作，感兴趣可参考https://www.chromium.org/developers/design-documents/process-models/）



## 渲染进程构成（RenderProcess）

一个渲染进程内存在大量线程，各司其职其中与渲染性能最为相关的又以下三个

- CrRendererMain（内核主线程）: 负责dom树及LayoutObject的建立、html文件解析、样式排布、已经脚本文件执行。
- Compositor(合成器线程): 进行分块操作，同时也负责接受用戶的I/O操作，分发回调事件等。
- CompositorTileWorker(栅格化线程): 将合成帧转换为位图或者 GPU 能识别的纹理并加以绘制。



## 完成一次页面渲染做了什么

### 资源加载及布局分层

<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMa2yofvjImvict98eibGwdbshagmal9scOxSK5sdFX9v61BibHrOcyznbvw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" style="zoom:80%;" />

初始化流程时预检资源构建及html数据，通过HTMLParser进行解码及分词处理为DomTree（处于更新流程还会接受来自Compositor线程的I/O搜集以进行更新）



<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMaXP4sFnhyBYO02GN0FA63RIKMZlKFOaodKRiagNQHaHYKZw64cajdt2g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" style="zoom:80%;" />

根据加载的内联、外联、行间样式生成stylesheets

<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMaVzLI9jic6QaYRZ5iatwdKmgE5uv3IlfV7yd3AWmnaUcd72l2h18IPNZQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" style="zoom:80%;" />

结合DomTree以及stylesheets 计算布局生成LayoutTree

<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMaKQwbutnElV1yYmCGusbQ1KUhGGONrXf8etjvhwdVHqIM3iaCD83Xicxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片" style="zoom:80%;" />

主线程同时遍历LayoutTree生成绘制记录（感受一下你在canvas画布上进行绘制的场景），绘制的先后层级与各种样式属性相关（z-index、display、transform...等均可能影响绘制层级）

<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMarltP2KI5EiazicEPHVwE8kKsKJJcDcccL5fXY65oJjQjkGibXawbLZHsA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" style="zoom:80%;" />

根据paint records 结合布局树，最终进行**分层**（Paint Layer Tree 及 Graphic Layer Tree的更新，后文会拓展此处）

> 内核主线程进行html解析:
>
> ![image-20220301235126698](/Users/lot/Library/Application Support/typora-user-images/image-20220301235126698.png)
>
> 
>
> 若存在src引入的外链，且无特定优先级标识（async/defer）则html解析前会进行预加载扫描，并向网络进程发起网络请求(除去外链资源外，script标签同样会打断html解析，js脚本中存在可能改变文档结构的操作)
>
> ![image-20220301235328675](/Users/lot/Library/Application Support/typora-user-images/image-20220301235328675.png)



### 图层切分

一般情况下去进行图层的整体绘制是低效且开销巨大的，大部分情况下用户只需要关注可视区内的内容，所以在主线程完成分层后，合成器线程会将每个图层进行切分（cut it !）并将其转交给栅格化线程（CompositorTileWorker）

![图片](https://mmbiz.qpic.cn/mmbiz_png/oAe2PlNm3ibibDyRiczwibUtLR1fbhLmV6sQCSc64wAmKic0uOfQNEhUIWrPibQjXMlPe5xHngYjYiaRFG7VpBqTnQPoQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

>![image-20220302004012932](/Users/lot/Library/Application Support/typora-user-images/image-20220302004012932.png)
>
>![image-20220302004048022](/Users/lot/Library/Application Support/typora-user-images/image-20220302004048022.png)



### 栅格化及合成帧创建

接受来自合成器线程的单位块进行栅格化处理，并且将其存入GPU的内存当中

- 若未开启硬件加速则由CPU使用 Skia 库的软件加速(Software Rasterization)，绘制进位图内，最后作为纹理上传给GPU，
- 反之则由OpenGL直接在GPU内进行光栅化和绘制

最后合成器线程再回头拾取完成光栅化的图块创建合成帧用以视图层展示

![image-20220301234212407](/Users/lot/Library/Application Support/typora-user-images/image-20220301234212407.png)

![image-20220302000443353](/Users/lot/Library/Application Support/typora-user-images/image-20220302000443353.png)



![未开启硬件加速的渲染场景](/Users/lot/Library/Application Support/typora-user-images/image-20220302003457133.png)

### 合成展示

<img src="https://mmbiz.qpic.cn/mmbiz_png/pn45hyXbxDpzhtXQDFJKmh54pXL48xMacmxZ5wcyNR1zbSW9uDmn6s5zjv2AB4ibPoajGTY3eEVn3uQIltVzcog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1" alt="图片" style="zoom:80%;" />

最终这些合成帧被提交至 GPU 进程，在进行渲染和前后缓冲区的交换后，将结果展示至屏幕中。

### Summary

Init:

![img](https://pic3.zhimg.com/80/v2-088259a0cb10483c8efca4e6292b8dc2_720w.jpg)

Update

![img](https://pic3.zhimg.com/80/v2-2e63f4096274f3947dd217b118548d22_720w.jpg)



## 分层

上面我们粗略的进行了一次渲染事务的分析，其中我们特别提及了分层，在整个浏览器的渲染流程中，分层也是一坐性能相关的大山不可不谈，下面我们就来剖析一下分层原理

><!--Paint Layer的命名经过一次迭代，RenderLayer->PaintLayer，RenderObject->LayoutObject -->
>
>[渲染层命名迭代日志]([GPU Accelerated Compositing in Chrome (chromium.org)](https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/#this-document-provides-background-and-details-on-the-implementation-of-hardware-accelerated-compositing-in-chrome))
>
>[官方转化解析，参照Blink Rendering Basics部分详解]([GPU Accelerated Compositing in Chrome (chromium.org)](https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/#from-renderlayers-to-graphicslayers))

![图片](https://mmbiz.qpic.cn/mmbiz_png/oAe2PlNm3ibibDyRiczwibUtLR1fbhLmV6sQkw5jhiapwMF6MPG55yibW1Mwvm1G0wILTV4EYFiaLqic9oaxB8xwdrNyBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### LayoutThree(布局树)

上文可知，render主线程（CrRendererMain）进行了词法编译结合层叠样式表产出布局树，

DOM 树中得每个 Node 节点都有一个对应的 LayoutObject 。每个LayoutObject 记录了每个需要被绘制在屏幕上的具体内容。

###PaintLayers(渲染层)

在解释渲染层之前，我们简单讲一下[层叠上下文]([深入理解CSS中的层叠上下文和层叠顺序 « 张鑫旭-鑫空间-鑫生活 (zhangxinxu.com)](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/))，，渲染层的出现便是为了实现这一概念

![img](https://pic4.zhimg.com/80/v2-9ab93d26115ef27a13c7c7a243be09b3_1440w.jpg)

浏览器提供的视图是具有Z轴方向的坐标空间，理论上上同一坐标空间的LayoutObject 属于同一个渲染层，这样约定的目的是为了能保证页面的合成顺序，让重叠元素间的交叠关系、透明度等都能得到正常展示，理论上满足一个层叠上下文产生条件时，就会生成一个渲染层，官方列举出的一些生成时机如下：

```javascript
## **It's the root object for the page** 
/** 页面根元素 **/


## **It has explicit CSS position properties (relative, absolute or a transform)** 
/** 有明确的css定位属性 **/
  
  
## **It is transparent** 

## **Has overflow, an alpha mask or reflection** 

## **Has a CSS filter** 
/** 是否存在明确的透明度、滤镜、遮罩、反射等堆叠属性 **/

  
## **Corresponds to canvas; element that has a 3D (WebGL) context or an accelerated 2D context** 
  
## **Corresponds to a video element**
 /** canvans video 等媒体元素 **/
```

对于渲染层本身也有大致3种类型的分类

- NormalPaintLayer：常规可见的元素
- OverflowClipPaintLayer：   overflow属性不为visible的元素
- NoPaintLayer：  或者无需绘制的元素，如一个空标签

###GraphicLayers（合成层）

合成层是一种被提升后的特殊渲染层，每个合成层会有一个单独的GraphicLayer，而其他非合成层的渲染层则与第一个拥有GraphicLayer的父层共用一个GraphicLayer，简单理解如下图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/oAe2PlNm3ibibDyRiczwibUtLR1fbhLmV6sQp5qYdpeKgicdBSAO0MMrwmry5HnXnrFVovpm47dc5mPPl7FWmxoa25g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

渲染层提升为合成层条件：

```javascript
## **Layer has 3D or perspective transform CSS properties**
  /** 具有空间变化css属性的渲染层 **/
## **Layer is used by video element using accelerated video decoding**

## **Layer is used by a canvas element with a 3D context or accelerated 2D context**
/** 具有媒体元素图层 **/
  
## **Layer is used for a composited plugin**

## **Layer uses a CSS animation for its opacity or uses an animated webkit transform**
/** 动画图层 **/
  
## **Layer uses accelerated CSS filters**

  
## **Layer has a descendant that is a compositing layer**
/** 合成层后代**/ 
  
## **Layer has a sibling with a lower z-index which has a compositing laye (in other words the layer overlaps a composited layer and should be rendered on top of it)**
  /** z-index层级较低的合成层后代 **/ 
```



<!--chrome94 及以上版本后官方进行了算法优化，目前视图上因为元素重叠产生的渲染层被迫提升为合成层的概率已经大大减小了 https://blog.chromium.org/2021/10/renderingng.html -->

>Chromium本地构建：
>https://github.com/chromium/chromium/blob/main/docs/mac_build_instructions.md
>
>
>
>Chromium多进程说明:
>
>https://www.chromium.org/developers/design-documents/multi-process-architecture
>
>
>
>Chromium进程模型:
>
>https://www.chromium.org/developers/design-documents/process-models/
