
Material Designのreact-iconsをchakrauiで使える

```js
// 1. Import
import { Icon } from "@chakra-ui/react"
import { MdSettings } from "react-icons/md"
// 2. Use the `as` prop
function Example() {
  return <Icon as={MdSettings} />
}
```

[Material Design icons](https://react-icons.github.io/react-icons/icons?name=md)
[chakra ui icon](https://chakra-ui.com/docs/media-and-icons/icon)
