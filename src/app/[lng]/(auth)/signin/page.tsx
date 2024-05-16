//"use client";
import { useTranslation } from "@/app/i18n";
import { languages, fallbackLng } from '@/app/i18n/settings'
import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
// import { useTranslations } from "next-intl";


// export const metadata: Metadata = {
//   title:
//     "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
// };



const SigninPage = async ({ params: { lng } }) => {
  // const t = useTranslations();
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'auth')
  return (
    <>
      <Breadcrumb pageName={t("sign_in_page")} />
      <Signin lng={lng} />
    </>
  );
};

export default SigninPage;
