import React, {Component} from 'react';
import { connect } from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';

const AppBarMenuIcon = ({paths, submenu, parent}) => {
  if (paths.current.level > 0) {
    if (parent) {
      return (<Link to={parent.pathname}><IconButton><ArrowBack /></IconButton></Link>);
    }
    return (<Link to="/main/home"><IconButton><ArrowBack /></IconButton></Link>);
  } else {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MenuIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        >

        {submenu.map((item) => (
           <MenuItem key={item.id} primaryText={item.name} containerElement={<Link to={item.pathname} />} />
        ))}
        <Divider />
        <MenuItem key="0" primaryText={'App Hub'} href="https://jlightfoot2.github.io/ad-pwa/build/#/apps" />

      </IconMenu>);
  }
};

const mapStateToProp = (state, ownProps) => {
  return {
    paths: state.navigation.paths,
    submenu: state.navigation.paths.current.childrenIds.map((id) => (state.navigation.tree[id + ''])),
    parent: state.navigation.paths.parent
  };
};
export default connect(mapStateToProp)(AppBarMenuIcon);

