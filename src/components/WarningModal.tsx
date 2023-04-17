import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

export default function WarningModal() {
    const [showModal, setShowModal] = useState(false);
    const [visitedBefore, setVisitedBefore] = useLocalStorage({ key: 'visitedBefore', defaultValue: false });

    useEffect(() => {
        if (!visitedBefore) {
            setShowModal(true);
            setVisitedBefore(true);
        }
    }, [setVisitedBefore, visitedBefore]);

    const handleClose = () => setShowModal(false);

    return (
        <Modal
            opened={showModal}
            onClose={handleClose}
            size="md"
            title="TerraFirmaCraft Anvil Solver"
            styles={{ body: { textAlign: 'center' } }}
        >
            <p>This tool may be considered an unfair advantage and will definitely remove the fun out of the forging minigame. By proceeding you agree that you are aware of this.</p>
            <Button variant="outline" color="blue" onClick={handleClose}>
                Close
            </Button>
        </Modal>
    );

}