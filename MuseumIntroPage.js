// src/components/MuseumIntroPage.jsx
import React from "react";

const MuseumIntroPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-6">
      <img
        src="https://ncch.gov.mn/Images/Museum/23/photo.jpg"
        alt="Музейн зураг"
        className="w-full h-auto rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Хэнтий аймгийн музейн танилцуулга
      </h1>
      <p className="text-gray-700 mb-3 leading-7">
        Хэнтий аймгийн музей нь БНМАУ-ын Гэгээрлийн сайдын 1949 оны 04 дүгээр
        сарын 08-ний өдрийн 61 тоот тушаалаар “Орон нутгийг судлах кабинет”
        нэртэйгээр байгуулагджээ. Уг кабинет нь 1971 оноос “Орон нутаг судлах
        музей” болж үйл ажиллагаагаа явуулан, 1984 оноос Халхын Сэцэн хануудын
        амьдарч байсан зуны ордноос үлдсэн 5 барилгыг сэргээн засварлуулж
        “Угсаатны зүй”-н музей болгон өргөжүүлснээр Орон нутаг судлах музей,
        Угсаатны зүйн музей болон салбарласан.
      </p>
      <p className="text-gray-700 mb-3 leading-7">
        2023 оны 07 дугаар сарын 27-ны өдөр орчин үеийн стандартад нийцсэн
        музейн шинэ барилгынхаа нээлтийг албан ёсоор хийн одоо үзүүллэгийн 7
        танхимд үйл ажиллагаагаа явуулж байна.
      </p>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          📧 Цахим шуудан:{" "}
          <a href="mailto:Khentiimuseum@gmail.com" className="text-blue-500">
            Khentiimuseum@gmail.com
          </a>
        </p>
        <p>📞 Холбоо барих: 98766666, 88581367</p>
      </div>
    </div>
  );
};

export default MuseumIntroPage;
