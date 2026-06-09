# Casey 项目作品集

使用 Next.js App Router、React、TypeScript、Tailwind CSS 和 Framer Motion 构建的个人项目展示网站。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 项目内容

项目配置集中在：

```txt
data/projects.ts
```

项目图片放在：

```txt
public/projects/
```

## 本地项目问答

右下角项目顾问使用本地静态知识库，不调用大模型或外部接口，也不需要环境变量。

问答配置集中在：

```txt
data/project-knowledge.ts
```

当前支持项目介绍、核心功能、技术栈、解决的问题、开发时间轴、后续规划，以及各项目的专项问题。未匹配到的问题统一回答：

```txt
暂时未收录到知识库中。
```

## 检查

```bash
npm run lint
npm run build
```
