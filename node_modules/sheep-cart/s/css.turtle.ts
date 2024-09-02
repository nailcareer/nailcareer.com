
import {camelCss} from "@chasemoskal/magical"
import {turtle_script, write_file, read_file} from "@benev/turtle"

export default turtle_script(async({output_directory}) => {
	const input = `${output_directory}/index.css`
	const output = `${output_directory}/index.compat.css`
	const text = await read_file(input)
	const css = camelCss(text)
	await write_file(output, css)
})

