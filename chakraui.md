
Material Designのreact-iconsや
Material Iconsをchakrauiで使える

```js
// 1. Import
import { Icon } from "@chakra-ui/react"
import { MdSettings } from "react-icons/md"
import {AddPhotoAlternate} from '@material-ui/icons'
// 2. Use the `as` prop
function Example() {
  return （
    <>
      <Icon as={MdSettings} />
      <Icon as={AddPhotoAlternate} />
    </>
}
```

[Material Design icons](https://react-icons.github.io/react-icons/icons?name=md)
[Material Icons](https://material-ui.com/components/material-icons/)
[chakra ui icon](https://chakra-ui.com/docs/media-and-icons/icon)
