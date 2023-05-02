import { Link } from "react-router-dom";
import { PAGE_STYLE } from "../../style-const/style-const";

const Page404 = () => {
  return <>
    <div className={`${PAGE_STYLE}`}>
      <p>Page not found</p>
      <Link to='/'>
        <p>Go to Welcome Page</p>
      </Link>
    </div>
  </>
}

export default Page404;