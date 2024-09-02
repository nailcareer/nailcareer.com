export const navlinks = [
    navlink("Home", "/"),
    navlink("Store", "/store/"),
    navlink("Blog", "https://www.blog.nailcareer.com/"),
    // navlink("Academy", "/academy/livestream"),
    // navlink("Academy", "/academy/livestream", ["new"]),
];
function navlink(label, href, tags = []) {
    return { label, href, tags };
}
//# sourceMappingURL=navlinks.js.map