export const Footer = (props) => {
  const userIsExternal=props.userIsExternal;
  return <p>{userIsExternal? "© All rights reserved.":"We are standing on the shoulders of"}</p>;
};
