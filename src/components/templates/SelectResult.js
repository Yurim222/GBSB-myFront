import { useState } from "react";
import Announcement from "../organisms/announcement.js";
import RandomModal from "../atoms/RandomModal.js";

function SelectResult() {

    const [open, setOpen] = useState(0);

    const openModal = () => {
        setOpen(1);
    }

    const closeModal = () => {
        setOpen(0);
    }

    return (
        <div className="w-full px-default">
            <Announcement
                props="여행 경로를 선택해 주세요" />
            <div>
                <div>
                    <p>Type A</p>
                    <ul>
                        <li>활동1</li>
                        <li>
                            <button onClick={openModal}>Click!</button>
                            <RandomModal open={open} close={closeModal} />
                        </li>
                        <li>활동2</li>
                        <li>활동3</li>
                        <li>
                            <button onClick={openModal}>Click!</button>
                            <RandomModal open={open} close={closeModal} />
                        </li>
                        <li>숙소</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <p>Type B</p>
                    <ul>
                        <li>활동1</li>
                        <li>
                            <button onClick={openModal}>Click!</button>
                            <RandomModal open={open} close={closeModal} />
                        </li>
                        <li>활동2</li>
                        <li>활동3</li>
                        <li>
                            <button onClick={openModal}>Click!</button>
                            <RandomModal open={open} close={closeModal} />
                        </li>
                        <li>숙소</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SelectResult;