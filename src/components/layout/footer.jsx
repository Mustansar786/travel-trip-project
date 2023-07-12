import PropTypes from "prop-types";
import { Typography, IconButton, Input, Button } from "@material-tailwind/react";
import { Grid } from "@mui/material";
import routes from "@/routes";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.slice(0,5).map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {/* {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })} */}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {/* {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })} */}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
     <section>
        <div style={{ backgroundColor: "#1A97D4", height: 150, }}>

          <div className="pt-10" style={{ backgroundImage: `url("http://localhost:5173/src/assets/images/frame.png")`, height: 150, textAlign: "-webkit-center" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6} style={{ textAlign: "-webkit-left" }}>
                <Typography className="pl-32 global_font_family" variant="h3" color="white">Have any question? Let us help you!</Typography>
                <Typography className="pl-32 global_font_family" variant="h6" color="white">Lörem ipsum krorat ekosiv och sende anim</Typography>
              </Grid>

              <Grid item xs={12} md={6} xl={6} style={{ textAlign: "-webkit-left" }}>
                <div className="relative flex w-full max-w-[24rem]">
                  <Input
                    type="email"
                    // label="Email Address"
                    // value={email}
                    // onChange={onChange}
                    placeholder="Input your email here"
                    className="pr-20 bg-white rounded-2xl"
                    containerProps={{
                      className: "min-w-0 rounded-2xl",
                    }}
                  />
                  <Button
                    size="sm"
                    color="blue"
                    // disabled={!email}
                    className="!absolute right-1 top-1 rounded-2xl"
                  >
                    <img width="15px" height="15px" src="http://localhost:5173/src/assets/images/send.png" />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>

        </div>
      </section>
    <footer className="relative px-4 pt-8 pb-6">
      <section>
       <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{paddingLeft:60}}>
            {navList}
           </Grid>

           <Grid item xs={12} md={4} style={{display: "flex", textAlign: "-webkit-left"}}>
                <img className="pl-3" src="http://localhost:5173/src/assets/images/social-icons.png" />
                <img className="pl-3" src="http://localhost:5173/src/assets/images/social-icons-1.png" />
                <img className="pl-3" src="http://localhost:5173/src/assets/images/social-icons-2.png" />
                <img className="pl-3" src="http://localhost:5173/src/assets/images/social-icons-3.png" />
                <img className="pl-3" src="http://localhost:5173/src/assets/images/social-icons-4.png" />
          </Grid>

          <Grid item xs={12} md={4} style={{display: "flex", textAlign: "-webkit-left"}}>
          <p>© 2023 Test Powered by{" "}</p>
          <a style={{color: "#1A97D4"}}>{" "}Innovation Factory</a>
          </Grid>
        </Grid>
       
        </section>
      {/* <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div> */}
    </footer>
    </>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "pink",
      name: "dribbble",
      path: "https://www.dribbble.com/creativetim",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Free Products",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Material Tailwind by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Tim
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
