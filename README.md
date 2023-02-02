# TDP Cloud UI

[Cloud Panel](https://github.com/tdp-resource/cloud-panel) 的前端组件, 框架基于 [vue-admin-template](https://github.com/rehiy/vue-admin-template)

*注意*：此项目无法独立工作，需要配合 [TDP Cloud 后端服务](https://github.com/tdp-resource/tdp-cloud) 或 [二进制可执行程序](https://github.com/tdp-resource/tdp-cloud/releases) 使用。

## 开发说明

### 启动开发服务

在项目目录运行  `serve.bat` 或 `./serve.sh`

### 提交代码时请使用下面标识

- `feat` 新功能（feature）
- `fix` 修补bug
- `docs` 文档（documentation）
- `style` 格式（不影响代码运行的变动）
- `refactor` 重构（即不是新功能，也不是修补bug的代码变动）
- `perf` 优化

> 此项要求自 **v0.5.0** 起实施，所有 `git commit` 描述需要以上述标识加半角冒号`:`开头

### 打包前端代码

在项目目录运行  `build.bat` 或 `./build.sh`

## 开发工具配置

项目编辑器推荐使用 `vscode`，并设置代码格式化插件如下

```json
{
    "[css]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "[scss]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    }
}

```

## 其他

License [GPL-3.0](https://opensource.org/licenses/GPL-3.0)

Copyright (c) 2022 TDP Cloud
