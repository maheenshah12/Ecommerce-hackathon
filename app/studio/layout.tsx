import {Metadata} from 'next';
export const metadata: Metadata = {
    title: "E-commerce-website",
    description: "Generated by create next app",
  };
  

const RootLayout = ({ children}: { children: React.ReactNode }) => {
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};
export default RootLayout;