import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import style from './style.module.css'
import CustomButton from '../../../elements/Button'
import btnImg from '../../../asstes/Button.png'


function BurgerMenu() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className={style.main_container} >
      <h1>trakor</h1>
      <ul>
        <li>Product</li>
        <li>Solutions</li>
        <li>Documentation</li>
        <li>Pricing</li>
      </ul>
      <div className={style.buttons_container} >
      <button className={style.login_BTN} >Log In</button>
      <CustomButton  backgroundColor="#334155" textColor="white" border='#475569' maxWidth='256px' children='Request more info' />
      </div>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)} className={style.menuBTN} ><img src={btnImg} alt='btn'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default BurgerMenu