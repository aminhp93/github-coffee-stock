import { MDXProvider } from "@mdx-js/react";
import Test from "./test.mdx";

const Stock = () => {
  return (
    <div>
      <MDXProvider>
        <div>
          <Test />
        </div>
      </MDXProvider>
    </div>
  );
};

export default Stock;
