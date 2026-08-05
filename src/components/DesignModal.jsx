import { useState, useEffect } from "react";

import "../styles/designModal.scss";
import designCategories from '../data/designCategories';

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import {
    TransformWrapper,
    TransformComponent
} from "react-zoom-pan-pinch";

const DesignModal = ({ isOpen, onClose, project }) => {
const [selectedImage, setSelectedImage] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);
const [lightboxOpen, setLightboxOpen] = useState(false);

const handlePrev = () => {

    const newIndex =
        currentIndex === 0
            ? project.images.length - 1
            : currentIndex - 1;

    setCurrentIndex(newIndex);

    setSelectedImage(project.images[newIndex]);

};

const handleNext = () => {

    const newIndex =
        currentIndex === project.images.length - 1
            ? 0
            : currentIndex + 1;

    setCurrentIndex(newIndex);

    setSelectedImage(project.images[newIndex]);

};

useEffect(() => {

    const handleKeyDown = (e) => {

        if (!lightboxOpen) return;

        if (e.key === "Escape") {

            setLightboxOpen(false);

        }

        if (e.key === "ArrowLeft") {

            handlePrev();

        }

        if (e.key === "ArrowRight") {

            handleNext();

        }

    };

    window.addEventListener(
        "keydown",
        handleKeyDown
    );

    return () => {

        window.removeEventListener(
            "keydown",
            handleKeyDown
        );

    };

}, [lightboxOpen, currentIndex]);


useEffect(() => {

    if (isOpen) {

        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-open");

    } else {

        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");

    }

    return () => {

        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");

    };

}, [isOpen]);

useEffect(() => {

    if (project?.images?.length) {

        setCurrentIndex(0);

        setSelectedImage(project.images[0]);

    }

}, [project]);

    if (!isOpen || !project) return null;

    const categoryLabel =
    designCategories.find(
        (item) => item.id === project.category
    )?.label || project.category;

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
                                    onClick={() => {

                                        setCurrentIndex(index);
                                        setSelectedImage(image);

                                    }}
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
                                🔍 Click to enlarge
                            </span>

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="modal-right">

                        <div className="project-head">
                            

                            <div className="category-area">
                                <span className="category">
                                    {categoryLabel}
                                </span>
                                <span className="category sec">
                                    {project.type}
                                </span>
                            </div>

                            <h2 className="project-title">
                                {project.title}
                            </h2>

                            <div className="line"></div>

                            {/* <p className="project-subtitle">
                                {project.subtitle}
                            </p> */}

                        </div>

                        <div className="info-group">

                            <div className="info-item">

                                <span>Date</span>

                                <p>{project.duration}</p>

                            </div>

                            <div className="info-item">

                                <span>TAG</span>

                                <div className="tag-list">

                                    {project.tag?.map((tag, index) => (

                                        <span
                                            className="tag"
                                            key={index}
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

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
                            <div className="info-item">
                                <span>Contribution</span>

                                <div className="progress-wrap">

                                    <div className="progress-bar">
                                        <div
                                            className="progress"
                                            style={{
                                                width: `${project.contribution}%`
                                            }}
                                        />
                                    </div>

                                    <strong>
                                        {project.contribution}%
                                    </strong>

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

                                Project View <GoArrowRight />

                            </a>
                            <a
                                onClick={onClose}
                                aria-label="Close"
                                rel="noopener noreferrer"
                                className="close-btn"
                            >

                                Close

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

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="lightbox-arrow prev"
                            onClick={handlePrev}
                        >
                            <IoIosArrowBack />
                        </button>

                        <TransformWrapper
                            key={selectedImage}
                            initialScale={1}
                            minScale={1}
                            maxScale={3.5}

                            centerOnInit={true}
                            centerZoomedOut={true}
                            limitToBounds={true}

                            wheel={{
                                step: 0.01,
                                smoothStep: 0.002
                            }}

                            doubleClick={{
                                mode: "reset"
                            }}

                            alignmentAnimation={{
                                sizeX: 0,
                                sizeY: 0,
                                velocityAlignmentTime: 200
                            }}

                            velocityAnimation={{
                                disabled: true
                            }}
                        >
                            {({ resetTransform, state }) => (
                                <TransformComponent
                                    wrapperClass="zoom-wrapper"
                                    contentClass="zoom-content"
                                >
                                    <img
                                        src={selectedImage}
                                        alt={project.title}
                                        className="lightbox-image"
                                        draggable="false"
                                    />
                                </TransformComponent>
                            )}
                        </TransformWrapper>

                        <button
                            className="lightbox-arrow next"
                            onClick={handleNext}
                        >
                            <IoIosArrowForward />
                        </button>

                    </div>

                </div>

            )
        }
        </div>
    );
};

export default DesignModal;