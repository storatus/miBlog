interface Links {
  [key: string]: Link;
}

interface Link {
  id: string;
  href: string;
  label: string;
}

export const links: Links = {
  home: {
    id: "home",
    href: "/",
    label: "Home",
  },
  crearBlog: {
    id: "crearBlog",
    href: "/crearBlog",
    label: "Crear Blog",
  },
};
