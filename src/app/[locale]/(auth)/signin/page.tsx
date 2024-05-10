import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import { useTranslations } from "next-intl";


export const metadata: Metadata = {
  title:
    "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumb pageName="Sign In Page" />
      <p> ss  -  {t.raw("app_title")} - ddd </p>
      <Signin />
    </>
  );
};

export default SigninPage;
