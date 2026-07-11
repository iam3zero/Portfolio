import { useState, useEffect } from "react";

import "../styles/designModal.scss";

const DesignModal = ({ isOpen, onClose, project }) => {
const [selectedImage, setSelectedImage] = useState("");
const [lightboxOpen, setLightboxOpen] = useState(false);

useEffect(() => {

    const handleEsc = (e) => {

        if(e.key==="Escape"){

            setLightboxOpen(false);

        }

    };

    window.addEventListener(
        "keydown",
        handleEsc
    );

    return ()=>{

        window.removeEventListener(
            "keydown",
            handleEsc
        );

    };

}, []);

useEffect(() => {

    if (project?.images?.length) {

        setSelectedImage(project.images[0]);

    }

}, [project]);

    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay">

            <div className="design-modal">

                {/* Header */}

                <div className="modal-header">

                    <div className="header-left">

                        <span className="modal-label">
                            Design Works
                        </span>

                    </div>

                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        ✕
                    </button>

                </div>

                {/* Body */}

                <div className="modal-content">

                    {/* ================= LEFT ================= */}

                    <div className="modal-left">

                        <div className="thumbnail-list">

                            {project.images?.map((image, index) => (

                                <button
                                    key={index}
                                    className={`thumbnail-item ${
                                        selectedImage === image ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedImage(image)}
                                >

                                    <img
                                        src={image}
                                        alt={`${project.title}-${index}`}
                                    />

                                </button>

                            ))}

                        </div>

                        <div
                            className="main-image"
                            onClick={() => setLightboxOpen(true)}
                        >

                            <img
                                src={selectedImage}
                                alt={project.title}
                            />

                            <span className="zoom-text">
                                Click image to enlarge
                            </span>

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="modal-right">

                        <div className="project-head">

                            <span className="category">
                                {project.category}
                            </span>

                            <h2 className="project-title">
                                {project.title}
                            </h2>

                            <p className="project-subtitle">
                                {project.subtitle}
                            </p>

                        </div>

                        <div className="info-group">

                            <div className="info-item">

                                <span>Duration</span>

                                <p>{project.duration}</p>

                            </div>

                            <div className="info-item">

                                <span>Member</span>

                                <p>{project.member}</p>

                            </div>

                            <div className="info-item">

                                <span>Tools</span>

                                <div className="tool-list">

                                    {project.tools?.map((tool, index) => (

                                        <span
                                            className="tool"
                                            key={index}
                                        >
                                            {tool}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                        <div className="project-description">

                            <h4>
                                Project Overview
                            </h4>

                            <p>

                                {project.overview
                                    || project.description}

                            </p>

                        </div>

                        <div className="modal-buttons">

                            <a
                                href={project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-btn"
                            >

                                Project View →

                            </a>

                        </div>

                    </div>

                </div>

            </div>
          {
            lightboxOpen && (

                <div
                    className="lightbox-overlay"
                    onClick={() => setLightboxOpen(false)}
                >

                    <button
                        className="lightbox-close"
                    >
                        ✕
                    </button>

                    <img
                        src={selectedImage}
                        alt={project.title}
                        onClick={(e)=>e.stopPropagation()}
                    />

                </div>

            )
        }
        </div>
    );
};

export default DesignModal;