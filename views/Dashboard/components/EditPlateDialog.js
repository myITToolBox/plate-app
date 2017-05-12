import React, { Component } from 'react'

import Modal from '../../../components/Modal/Modal'
import PropTypes from 'prop-types'

class EditPlateDialog extends Component {
  static propTypes = {
    editPlateOpen: PropTypes.bool,
    editPlateHandleClose: PropTypes.func,
    plateId: PropTypes.string,
    plateName: PropTypes.string,
    plateDescription: PropTypes.string,
    plateStatus: PropTypes.string,
    editPlate: PropTypes.func,
    handleSubmit: PropTypes.func
  }

  state = {
    plateStatusSelected: 'New'
  }

  editPlateDetails = async (e, id, editPlate, editPlateHandleClose) => {
    e.preventDefault()
    const newPlateName = document.getElementById('currentPlateName').value
    const newPlateDescription = document.getElementById(
      'currentPlateDescription'
    ).value
    await editPlate(
      id,
      newPlateName,
      newPlateDescription,
      this.state.plateStatusSelected
    )
    editPlateHandleClose()
  }

  plateStatusSelection = () => {
    var selectedValue = document.querySelector(
      'input[name = "plateStatus"]:checked'
    ).value
    this.setState({
      plateStatusSelected: selectedValue
    })
  }

  render() {
    return (
      <Modal
        open={this.props.editPlateOpen}
        closeModal={this.props.editPlateHandleClose}
      >
        <h3 className="header-style">Edit Plate</h3>
        <form
          id="editPlateForm"
          onSubmit={e =>
            this.editPlateDetails(
              e,
              this.props.plateId,
              this.props.editPlate,
              this.props.editPlateHandleClose
            )}
        >
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="input-group" style={{ width: '100%' }}>
                <label>
                  Plate Name:
                </label>
                <br />
                <input
                  name="currentPlateName"
                  id="currentPlateName"
                  type="text"
                  defaultValue={this.props.plateName}
                  style={{ marginBottom: 20, width: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="input-group" style={{ width: '100%' }}>
                <label>
                  Plate Description:
                </label>
                <br />
                <textarea
                  name="currentPlateDescription"
                  id="currentPlateDescription"
                  rows={4}
                  defaultValue={this.props.plateDescription}
                  style={{ marginBottom: 20, width: '100%' }}
                />
              </div>
            </div>
          </div>
          <div>Status:</div>
          <div className="input-group" onChange={this.plateStatusSelection}>
            <input
              type="radio"
              id="complete"
              tabIndex="0"
              name="plateStatus"
              value="Complete"
            />
            <label htmlFor="complete" style={{ marginRight: 20 }}>
              Complete
            </label>
            <input
              type="radio"
              id="inProgress"
              tabIndex="0"
              name="plateStatus"
              value="In-Progress"
            />
            <label htmlFor="inProgress">In Progress</label>
          </div>
          <br />
          <div className="input-group">
            <button
              className="secondary"
              onClick={this.props.editPlateHandleClose}
            >
              Cancel
            </button>
            <button className="primary" type="submit">Submit</button>
          </div>
        </form>
        <style jsx>{`
          .header-style {
            margin-bottom: 10px;
          }
          .button-options {
            float: right;
          }
        `}</style>
      </Modal>
    )
  }
}

export default EditPlateDialog
