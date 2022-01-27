import {
    Link,
    useMatch,
    useResolvedPath
  } from "react-router-dom";
  import type { LinkProps } from "react-router-dom";


export function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <div>
          <Link
            className={ match ?  "border-b-4 border-double border-white text-green-600 underline duration-500 py-6" : "hover:text-green-600 duration-300 py-6" }
            to={to}
            {...props}
          >
            {children}
          </Link>
        </div>
      );
  }