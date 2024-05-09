import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Squeeze",
            path: "/squeeze",
        },
        {
            title: "Confirmation",
            path: "/confirmation",
        },
        {
            title: "Value",
            path: "/value",
        },
        {
            title: "Sales",
            path: "/sales",
        },
        {
            title: "Other",
            path: "/other",
        },
    ]
    return (
        <div>
            {links.map((link => (
                <Link href={link.path} key={link.title.toLowerCase()}>{link.title}</Link>
            )))}
        </div>
    )
};

export default Links;