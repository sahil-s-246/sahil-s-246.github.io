# My Projects Bank
List all of the projects you have ever built here. Gemini will read this file during compilation and dynamically select the most relevant projects that match the Job Description, injecting them directly into your LaTeX template.

## Project 1: Visual Mathematical Reasoning Evaluation of multimodal LLMs
- **Tech Stack:** Gemini API, DPT, MongoDB, OpenRouter
- Designed a two-phase evaluation pipeline to benchmark the symbolic reasoning of multimodal LLMs against structured math expressions and visual hints.
- Built automated dataset generation and extraction modules using MongoDB to handle high-volume model probing.

## Project 2: Restaurant Menu Dish recommendation system
- **Tech Stack:** React, Weaviate, FastAPI
- Created a hybrid recommendation engine using PyNNDescent-based collaborative filtering and content-based retrieval via Weaviate’s vector search.
- Integrated Gemini API to re-rank dish recommendations based on user preferences, filters and context-aware prompts.

## Project 3: StainAI
- **Tech Stack:** CLIP, SAM2, EfficientNet, FastAPI, React Native
- Fine-tuned CLIP for stain detection and EfficientNet for fabric classification, integrated with SAM2 for segmentation.
- Built FastAPI inference endpoints connecting model predictions to a React Native mobile app.

## Project 4: AI Sports Ad Generator
- **Tech Stack:** FastAPI, Gemini API, Groq, React, Vite
- Built a real-time video analysis pipeline using Gemini API for segment-by-segment event detection, streaming results live to a React frontend.
- Integrated Groq for AI-generated ad copy triggered by detected game events, with results persisted to JSON and displayed with copy-to-clipboard UX.

## Project 5: Analysis of Popular Languages on Stack Overflow
- **Tech Stack:** Pandas, Plotly, Google Colab
- Utilized Stack Overflow's query system to assess programming language popularity among users by analyzing tag frequencies associated with their posts.
- Developed an interactive Plotly graph to visualize and explore the relative popularity and trends of programming languages based on their occurrences in user-contributed posts.

## Project 6: FlightFinder
- **Tech Stack:** Smtplib, Twilio API
- Utilized the Tequila API to retrieve detailed flight information, facilitating real-time updates.
- Implemented Sheety API to cross-reference flight prices from Google Sheets, automating comparisons against predefined thresholds.
- Implemented SMTP via smtplib for email notifications and Twilio for instant messaging alerts when prices fell below the set threshold.

## Project 7: Camspeak
- **Tech Stack:** OpenCV, gTTS
- Employed OpenCV library to interface with the camera, capturing input images for text extraction and translation.
- Integrated an Optical Character Recognition (OCRSpace) API to extract text from images and used gTTS (Google Text-to-Speech) for translating the recognized text into speech output.
