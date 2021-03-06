import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import utils from './utils';

import style from './style';

class ImageZoomer extends Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 0;
    this.needRaF = true;
    this.state = {
      showZoom: false,
      position: {
        x: this.x,
        y: this.y,
      },
    };
  }

  update = state => {
    this.setState(
      {
        ...state,
        position: {
          x: this.x,
          y: this.y,
        },
      },
      () => {
        this.needRaF = true;
      }
    );
  };

  mouseMoveHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    e = utils.normalizeUserPosition(e.nativeEvent || e);
    if (this.__ref) {
      this.__ref.bb = this.__ref.getBoundingClientRect();
      this.x = e.x - this.__ref.bb.left;
      this.y = e.y - this.__ref.bb.top;
      if (!this.needRaF) return;
      this.needRaF = false;
      window.requestAnimationFrame(
        this.update.bind(this, {
          showZoom: true,
        })
      );
    }
    return false;
  };

  mouseEnterHandler = () => {
    this.setState({ showZoom: true });
  };

  mouseLeaveHandler = () => {
    this.setState({ showZoom: false });
  };

  addRef = node => {
    if (node) {
      this.__ref = node;
      this.__ref.addEventListener('touchmove', this.mouseMoveHandler);
    }
  };

  componentWillUnmount() {
    if (this.__ref)
      this.__ref.removeEventListener('touchmove', this.mouseMoveHandler);
  }

  render() {
    const { image, conf, alt } = this.props;
    const { showZoom, position } = this.state;
    const { zoom = 2 } = conf;

    const positionImageX = position.x * zoom;
    const positionImageY = position.y * zoom;

    const styleZoomer = Object.assign(
      {},
      !!conf.zoomerContainerClass ? {} : style.zoomercontainer
    );

    const styleInner = Object.assign(
      {
        transform: `translateY(${position.y}px) translateX(${position.x}px)`,
        visibility: showZoom ? 'visible' : 'hidden',
      },
      !!conf.zoomerClass ? {} : style.zoomer
    );

    const styleImage = Object.assign(
      {
        width:
          this.__ref && this.__ref.bb ? this.__ref.bb.width * zoom + 'px' : 0,
        height:
          this.__ref && this.__ref.bb ? this.__ref.bb.height * zoom + 'px' : 0,
        backgroundImage: `url(${image})`,
        transform: `translateY(-${positionImageY}px) translateX(-${positionImageX}px)`,
      },
      style.zoomercontainer__inner__image
    );
    return (
      <Fragment>
        <img
          src={image}
          alt={alt}
          className={conf.zoomerContainerClass}
          onMouseMove={showZoom ? this.mouseMoveHandler : null}
          onMouseEnter={this.mouseEnterHandler}
          onMouseLeave={this.mouseLeaveHandler}
          onTouchStart={this.mouseEnterHandler}
          onTouchEnd={this.mouseLeaveHandler}
          ref={this.addRef}
          style={styleZoomer}
        />
        <div style={styleInner} className={conf.zoomerClass}>
          <div style={styleImage} />
        </div>
      </Fragment>
    );
  }
}

ImageZoomer.defaultProps = {
  conf: {},
};

ImageZoomer.propTypes = {
  image: PropTypes.string,
  conf: PropTypes.shape({
    zoom: PropTypes.number,
    zoomerContainerClass: PropTypes.string,
    zoomerClass: PropTypes.string,
  }),
};

export default ImageZoomer;
