import React from 'react';
import clsx from 'clsx';
import { Spinner } from 'react-bootstrap';
import './BaseLoading.scss';

/**
 * App base loading wrapper
 */
interface Iprops {
  className?: string;
  loading: boolean;
  transparent?: boolean;
  lockWhileLoading?: boolean;
  children?: React.ReactNode;
  variant?: string;
}

function BaseLoading(props: Iprops) {
  return (
    <div
      className={clsx('base-loading', props.className, {
        'is-loading': props.loading,
        'is-transparent': props.transparent,
        'is-locked': props.lockWhileLoading && props.loading,
      })}
    >
      <div className="spinner-wrapper">
        <Spinner animation="border" variant={props.variant} />
      </div>
      {props.children}
    </div>
  );
}

BaseLoading.defaultProps = {
  loading: false,
  lockWhileLoading: true,
  variant: 'secondary',
  transparent: false,
};

export default BaseLoading;
