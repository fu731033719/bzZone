import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, QrCode } from "lucide-react";

export const DATA = {
  name: "付晨伟",
  nickName: "洛特(Lot)",
  initials: "DV",
  url: "https://dillion.io",
  location: "中国/浙江/杭州",
  description: "花名:洛特/Lot,94年生人（30👴🏻），前端老兵👨‍🚀‍",
  summary:
    "[2017年毕业与丽水学院](/#education)，2017年计科专业毕业, B/C端业务涉猎广泛, `7年前端工作经验`,`标准ENTJ，逻辑、自驱是底色`，业务生活热爱 `健身💪🏻、跑步🏃🏻‍♀️、游戏🎮、旅行🚄`，目前Base杭州，在酷家乐任职酷空间前端负责人，持续自我迭代中🤖，曾先后在[兔狗科技](https://www.citytogo.com/)、[菜鸟网络](https://www.cainiao.com/index.html)、[群核科技(酷家乐)](https://www.kujiale.com/)，三家企业就职前端工程开发相关岗位,项目业务类型涵盖`传统C类电商` `B类运力网络可视化工具`及`Sass设计工具`等；工作内容涵盖：`范式的React/Vue框架生态标准前端工程搭建` `3D场景网页应用搭建及性能优化` `团队标准工程化建设` `前端团队组织建设与人员梯度管理`等",
  avatarUrl: "/me.jpg",
  skills: ["React", "Three", "Pixi", "D3", "Rxjs", "Typescript", "架构设计"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "15706804793@163.com",
    tel: "+86 15706804793",
    social: {
      GitHub: {
        name: "GitHub",
        qrcode: "",
        url: "https://github.com/fu731033719",
        icon: Icons.github,
        navbar: true,
      },
      wx: {
        name: "微信",
        qrcode: "/wx_qrcode.jpg",
        url: "",
        icon: Icons.wx,
        navbar: true,
      },
      maimai: {
        name: "脉脉",
        qrcode: "/maimai_qrcode.jpg",
        url: "",
        icon: Icons.maimai,
        navbar: true,
      },
      juejin: {
        name: "掘金",
        qrcode: "",
        url: "https://juejin.cn/user/430664288569837",
        icon: Icons.juejin,
        navbar: true,
      },
      weibo: {
        name: "微博",
        qrcode: "",
        url: "https://weibo.com/danybullshittdlemon",
        icon: Icons.weibo,
        navbar: true,
      },
      redBook: {
        name: "小红书",
        qrcode: "",
        url: "https://www.xiaohongshu.com/user/profile/5d0cebc6000000001603dee9",
        icon: Icons.redBook,
        navbar: true,
      },
      email: {
        name: "email",
        qrcode: "",
        url: "mailto:15706804793@163.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  contactContent: `
  - 电话：+86 15706804793
  - wx: kill_word
  - 
  `,
  work: [
    {
      company: "群核科技(酷家乐)",
      href: "https://www.kukongjian.com/",
      badges: ["商业工具前端部", "酷空间前端负责人"],
      location: "杭州",
      title: "资深前端开发工程师",
      logoUrl: "/kujiale.webp",
      start: "2023/08",
      end: "至今",
      description:
        "子品牌酷空间前端负责人，负责商业空间整体公装前端解决方案支持，商空前端部门前端标准化体系建设及人员梯度管理",
    },
    {
      company: "群核科技(酷家乐)",
      href: "https://www.kujiale.com/",
      badges: ["公装商业空间拓展业务线", "技术负责人"],
      location: "杭州",
      title: "资深前端开发工程师",
      logoUrl: "/kujiale.webp",
      start: "2022/05",
      end: "2023/08",
      description:
        "办公空间公装场景业务解决方案技术负责人，负责解决头部KA客户大型办公空间方案搭建还原的效率痛点，以办公家具场景为切面提供从场景搭建到渲染、报价等一体化的解决方案支持",
    },
    {
      company: "群核科技(酷家乐)",
      href: "https://www.kujiale.com/",
      badges: ["定制工具前端部"],
      location: "杭州",
      title: "资深前端开发工程师",
      logoUrl: "/kujiale.webp",
      start: "2020/08",
      end: "2022/05",
      description:
        "负责酷家乐核心营收模块“定制工具”的日常开发与迭代支持，进行业务模块迭代、工程优化、性能优化等工作支持",
    },
    {
      company: "菜鸟网络",
      href: "https://www.cainiao.com/",
      badges: ["履行事业部"],
      location: "杭州",
      title: "前端开发工程师",
      logoUrl: "/cainiao.png",
      start: "2019/02",
      end: "2020/08",
      description:
        "负责履行运力及仓配整体链路业务支持，为仓配线路优化、仓储调度提供可视化解决方案支持",
    },
    {
      company: "兔狗科技",
      href: "https://www.citytogo.com",
      badges: [],
      location: "杭州",
      title: "前端开发工程师",
      logoUrl: "/tugou.jpg",
      start: "2017/07",
      end: "2019/02",
      description:
        "负责内容增长平台建设、C端日常活动支持、电商平台业务迭代支持",
    },
  ],
  education: [
    {
      school: "丽水学院",
      href: "https://www.lsu.edu.cn/main.htm",
      degree: "本科、计算机科学与技术",
      logoUrl: "/school.jpg",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "CAD智能识别",
      href: "https://www.kujiale.com/pub/cspace/tool/cad",
      dates: "2023/08 - 2024/02",
      active: true,
      description:
        "服务CAD文件快速转换酷家乐户型方案，桥接快速智能放置的自动工具",
      technologies: [
        "React",
        "Math.js（内部几何库）",
        "EGS（内部渲染引擎，类Three）",
      ],
      links: [],
      image: "",
      video: "/cad.mp4",
    },
    {
      title: "广告3D编辑工具",
      href: "https://www.kukongjian.com/koolsign",
      dates: "2024/02 - 2024/10",
      active: true,
      description:
        "服务广告客户进行快速的2D转3D场景还原（类figma的vector-to-3d插件形态）、提供一体化的场景渲染、场景对象编辑、渲染效果图生成等解决方案支持",
      technologies: [
        "React",
        "Math.js（内部几何库）",
        "EGS（内部渲染引擎，类Three）",
        "gemo-kernal(内部造型引擎)",
      ],
      links: [],
      image: "",
      video:
        "https://qhstaticva-cos.kujiale.com/media/yun/help/video/UID_4f71332a_c4eb_4219_1712565523673.mp4",
    },
    {
      title: "办公家具一体化支持",
      href: "",
      dates: "2022/05 - 2023/08",
      active: true,
      description:
        "公装装修场景，头部KA存在很多大型办公空间方案搭建还原的效率痛点，以此为背景公司尝试涉足公装领域，以办公家具场景为切面提供从场景搭建到渲染、报价等一体化的解决方案支持，个人作为技术TO参与项目落地",
      technologies: [
        "React",
        "Math.js（内部几何库）",
        "EGS（内部渲染引擎，类Three）",
      ],
      links: [],
      image: "",
      video: "/beidou.mp4",
    },
    {
      title: "北斗网络仿真",
      href: "",
      dates: "2019/03 - 2020/08",
      active: true,
      description:
        "基于整体物流节点数据结构进行合理分层，类ECS设计模式抽象线路对象、节点对象的视图展示模块及交互功能模块，实现灵活组装的能力，（省/市/区/县）基于扁平索引结构达成快速的线路聚合及炸开设计，使用rxjs进行了实时推流状态process的封装保证了多路由执行场景的数据稳定，使用类静态图模式的思路进行画布性能优化（减少不必要的Componet update,进行纯视图层更新），最大渲染线路数量可达10W条，帧率稳定在30帧",
      technologies: ["React", "Umi", "rxjs", "Amap"],
      links: [],
      image: "",
      video: "/beidou.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
  ],
} as const;
