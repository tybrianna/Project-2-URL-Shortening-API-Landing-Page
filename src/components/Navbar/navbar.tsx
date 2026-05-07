import { ItemLink, List, NavigationWrapper } from "./navigation.styles";
function Navigation({ clicked, handleClick }) {
  return (
    <NavigationWrapper clicked={clicked}>
      <List>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Features
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Pricing
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Resources
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Login
          </ItemLink>
        </li>
        <li>
          <ItemLink className="h3" onClick={handleClick}>
            Sign Up
          </ItemLink>
        </li>
      </List>
    </NavigationWrapper>
  );
}

export default Navigation;
