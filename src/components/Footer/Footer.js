import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.body}>
      <div className={s.footer}>
        <div className={s.footerAddr}>
          <h1 className={s.footerLogo}>CandleariaStore</h1>
          <h2>Contact</h2>
          <address className={s.address}>
            5534 Somewhere In. The World 22193-10212
            <a className={s.footerBtn} href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>
        <ul className={s.footerNav}>
          <li className={s.navItem}>
            <h2 className={s.navTitle}>Media</h2>
            <ul className={s.navUl}>
              <li>
                <a className={s.navUlItem} href="#">
                  Online
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Print
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Alternative Ads
                </a>
              </li>
            </ul>
          </li>

          <li className={s.navItem}>
            <h2 className={s.navTitle}>Technology</h2>
            <ul className={s.navUl}>
              <li>
                <a className={s.navUlItem} href="#">
                  Hardware Design
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Software Design
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Digital Signage
                </a>
              </li>
            </ul>
          </li>

          <li className={s.navItem}>
            <h2 className={s.navTitle}>Legal</h2>
            <ul className={s.navUl}>
              <li>
                <a className={s.navUlItem} href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className={s.navUlItem} href="#">
                  Sitemap
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className={s.legal}>
          <p>&copy; 2023 CandleariaStore. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
