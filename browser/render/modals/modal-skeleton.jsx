import React from 'react'
import FAIcon from '@fortawesome/react-fontawesome'
import eventEmitter from 'lib/event-emitter'
import './modal'

export default class ModalSkeleton extends React.Component {
  closeModal () {
    eventEmitter.emit('modal:close')
  }

  render () {
    const { width, closeBtn } = this.props
    return (
      <div className="modal-overlay">
        <div className="modal" style={{ width: width || '70%' }}>
          {closeBtn !== false && (
            <div className="close-btn" onClick={this.closeModal.bind(this)}>
              <FAIcon icon="times" />
              <span className="text">ESC</span>
            </div>
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}
