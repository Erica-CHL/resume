# 个人项目展示系统

一个使用 Next.js App Router、React、TypeScript、Tailwind CSS 和 Framer Motion 构建的个人项目展示网站。第一阶段聚焦项目展示、项目详情、时间轴、截图轮播和数字分身聊天入口。

## 快速开始

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看网站。

## 内容维护

项目内容集中在：

```txt
data/projects.ts
```

新增项目时复制一个 `Project` 配置即可。项目图片放在：

```txt
public/projects/
```

例如：

```txt
public/projects/project-a/overview.png
```

然后在 `images` 字段中引用：

```ts
images: ["/projects/project-a/overview.png"]
```

## 已完成范围

- Hero 区
- 项目列表卡片
- 项目详情页
- 项目截图轮播
- 固定高度、内部滚动、倒序排列的项目时间轴
- 右下角数字分身聊天入口
- `/api/avatar-chat` Mock API
- `services/avatarClient.ts` 统一接口预留

## API 预留

请求：

```json
{
  "message": "这个项目是做什么的？",
  "projectId": "portfolio-os"
}
```

返回：

```json
{
  "reply": "你好，我是项目展示页的小助理，目前正在开发中。"
}
```

## 后续方向

- 接入真实小分身服务
- 引入 SQLite 和项目知识库
- 增加更多项目与真实截图
- 汇总访客关注点并传递给长期分析系统

## 部署

推送到 GitHub 后，可直接在 Vercel 选择该仓库部署。默认构建命令为：

```bash
npm run build
```
