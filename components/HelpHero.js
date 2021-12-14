export default function HelpHero() {
  return (
    <>
      <div className="">
        <img
          src="../static/BCancer.jpg"
          alt="help other hero image, Breast Cancer"
          className="w-full h-1/15"
        />
      </div>
      <div className="shadow-inner shadow-lg pt-20 px-20">
        <h3 className="font-bold text-3xl font-serif">Breast Cancer</h3>
        <p className="pt-10 text-xl font-serif">
          Breast cancer arises in the lining cells (epithelium) of the ducts
          (85%) or lobules (15%) in the glandular tissue of the breast.
          Initially, the cancerous growth is confined to the duct or lobule (“in
          situ”) where it generally causes no symptoms and has minimal potential
          for spread (metastasis). There are different kinds of breast cancer.
          The kind of breast cancer depends on which cells in the breast turn
          into cancer.
        </p>
        <p className="pt-10 text-xl font-serif">
          In 2020, there were 2.3 million women diagnosed with breast cancer and
          685 000 deaths globally. As of the end of 2020, there were 7.8 million
          women alive who were diagnosed with breast cancer in the past 5 years,
          making it the world’s most prevalent cancer. There are more lost
          disability-adjusted life years (DALYs) by women to breast cancer
          globally than any other type of cancer. Breast cancer occurs in every
          country of the world in women at any age after puberty but with
          increasing rates in later life.
        </p>
        <p className="pt-10 text-xl font-serif">
          Please help us and fill the form bellow and share your medical test
          results for Breast Cancer, and contribute to enrich the database which
          will help many others in providing an accurate medical prediction for
          their status.
        </p>
        <p className="pt-10 text-xl">
          <h4 className="font-bold text-xl font-serif">Useful links</h4>
          <a
            href="https://www.breastcancer.org/"
            className="text-blue-600 visited:text-purple-600 ..."
          >
            Breast Cancer Organization
          </a>
          <br></br>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
            className="text-blue-600 visited:text-purple-600 ..."
          >
            World Health Organization
          </a>
        </p>
      </div>
    </>
  );
}
