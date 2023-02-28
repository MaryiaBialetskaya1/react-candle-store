import s from "./Header.module.css";
import account from "../Header/images/account.png";
import bag from "../Header/images/bag.png";

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.flexItem}>
        <h1 className={s.pageHeader}>Candlearia Store</h1>
      </div>
      <div className={s.flexItem}>
        <input className={s.formInput} type="text" placeholder="Search" />
      </div>
      <div className={s.flexItem}>
        <div className={s.box}>
          <div className={s.flexItem}>
            <img className={s.png} src={account} alt="account icon" />
          </div>
          <div className={s.flexItem}>
            <p className={s.paragraph}>account</p>
          </div>
        </div>
      </div>
      <div className={s.flexItem}>
        <div className={s.box}>
          <div className={s.flexItem}>
            <img className={s.png} src={bag} alt="shopping bag" />
          </div>
          <div className={s.flexItem}>
            <p className={s.paragraph}>bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};
