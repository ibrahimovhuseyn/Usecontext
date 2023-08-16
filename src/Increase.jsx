import React, { useContext, useState } from 'react'
import DataContext from './DataContext'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Increase() {
    const { number, setNumber } = useContext(DataContext)
    const [modal, setModal] = useState(false)
    const [changedNum, setChangedNum] = useState(number)

    function openModal() {
        setModal(true)
    }

    function minus() {
        if (changedNum > 1) {
            setChangedNum(changedNum - 1)
        }
        else { return }
    }
    function plus() {
        if (changedNum < 15) {
            setChangedNum(changedNum + 1)

        }
        else { return }
    }

    function submit() {
        setNumber(changedNum)
    }

    return (
        <div>

            <button
                onClick={openModal}
            >Open Modal
            </button>

            <Modal isOpen={modal} toggle={() => { setModal(false) }} >
                <ModalHeader toggle={() => { setModal(false) }}>Modal title</ModalHeader>
                <ModalBody>
                    {changedNum}
                    <button onClick={minus}>Azalt</button>
                    <button onClick={plus}>Artir</button>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        setModal(false)
                        submit()
                    }}>
                        Testiqle
                    </Button>{' '}
                    <Button color="secondary" onClick={() => {

                        setModal(false)
                        setChangedNum(number)
                    }}>
                        Legv et
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Increase