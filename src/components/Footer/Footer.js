import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.body}>
      <div className={s.footer}>
        <div className={s.footerAddr}>
          <h1 className={s.footerLogo}>CandleariaStore</h1>
          <h2 className={s.footerHeader}>Contact</h2>
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
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Online
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Print
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Alternative Ads
                </button>
              </li>
            </ul>
          </li>

          <li className={s.navItem}>
            <h2 className={s.navTitle}>Product</h2>
            <ul className={s.navUl}>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Benefits
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Partners
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Digital Signage
                </button>
              </li>
            </ul>
          </li>

          <li className={s.navItem}>
            <h2 className={s.navTitle}>Legal</h2>
            <ul className={s.navUl}>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Privacy Policy
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Terms of Use
                </button>
              </li>
              <li className={s.buttonItem}>
                <button className={s.navUlItem} href="#">
                  Sitemap
                </button>
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
