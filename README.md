# WHOIS ME

![CI](https://github.com/a-skua/whois.js/workflows/Publish/badge.svg)

## CLI
```sh
deno run jsr:@askua/whois
```

## Browser
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>WHOIS ME</title>
  <script type="importmap">
    {
      "imports": {
        "@askua/whois": "https://esm.sh/jsr/@askua/whois@2025.12.6"
      }
    }
  </script>
  <script type="module">
    import { me } from "@askua/whois";
    console.log(me);
  </script>
</head>
<body>WHOIS ME</body>
</html>
```

```sh
deno run --allow-net --allow-read jsr:@std/http/file-server
```
