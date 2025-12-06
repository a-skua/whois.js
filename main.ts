import { gray, green, italic } from "@std/fmt/colors";

export const me: string = `
${italic("name")} = "${green("asuka")}"
${italic("lang")} = "${green("ja")}"
${italic("loc")}  = "${green("Japan")}"
${italic("fav")}  = "${green("WebAssembly")}"

${gray("[org]")}
${italic("name")} = "${green("株式会社モニクル")}"
${italic("role")} = "${green("SWE")}"

${gray("[sns]")}
${italic("X")}       = "${green("@a_skua")}"
${italic("GitHub")}  = "${green("@a-skua")}"
${italic("Bruesky")} = "${green("@askua.dev")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssemblyでできること")}"
${italic("publish")} = "${green("技術書典14")}"

${gray("[[book]]")}
${italic("title")}   = "${green("実践入門WebAssembly")}"
${italic("publish")} = "${green("インプレス NextPublishing")}"

${gray("[[book]]")}
${italic("title")}   = "${green("ご注文はWASIですか?")}"
${italic("publish")} = "${green("技術書典15")}"

${gray("[[book]]")}
${italic("title")}   = "${green("ご注文はWASIですか??")}"
${italic("publish")} = "${green("技術書典16")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssembly Cookbook vol.1")}"
${italic("publish")} = "${green("技術書典16")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssembly System Interface入門")}"
${italic("publish")} = "${green("インプレス NextPublishing")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssembly Cookbook vol.2")}"
${italic("publish")} = "${green("技術書典17")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssembly Cookbook vol.3")}"
${italic("publish")} = "${green("技術書典18")}"

${gray("[[book]]")}
${italic("title")}   = "${green("WebAssembly Cookbook vol.4")}"
${italic("publish")} = "${green("技術書典19")}"
`.trim();

if (import.meta.main) {
  console.log(me);
}
