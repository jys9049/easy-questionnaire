"use client";

import { useRef } from "react";
import nftImage from "./assets/nft_img.png";
const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const addTextToImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 이미지 로드
    const img = new Image();
    img.src = nftImage.src; // 이미지 경로
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      // 이미지 그리기
      ctx.drawImage(img, 0, 0);

      // 텍스트 추가
      ctx.font = "55px Arial";
      ctx.fillStyle = "white";

      ctx.fillText("홍길동", 400, 1435);
      ctx.fillText("하프코스", 400, 1545);
      ctx.fillText("2024", 400, 1655);
      ctx.fillText("01:23:45", 400, 1765);

      // 새로운 이미지로 변환
      const newImageUrl = canvas.toDataURL("image/png");
      downloadImage(newImageUrl);
    };
  };

  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "output_image.png";
    link.click();
  };

  return (
    <div>
      <h1>이미지에 글자 추가하기</h1>
      <button onClick={addTextToImage}>이미지 처리</button>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Home;
