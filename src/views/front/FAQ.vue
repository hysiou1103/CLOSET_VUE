<template>
  <div class="FAQ autoFadein">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-7 col m-auto">
          <div class="accordion" id="faq">
            <div class="card">
              <div class="card-header bg-white">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#whoAreWe"
                    aria-expanded="true"
                    aria-controls="whoAreWe"
                  >
                    WHO ARE WE ?
                  </button>
                </h2>
              </div>
              <div id="whoAreWe" class="collapse" data-parent="#faq">
                <div class="card-body">
                  <p>
                    親愛的顧客您好，我們是成立於2021年的年輕品牌，致力於提供客戶良好的購物體驗及品質，
                    以下常見問題中無法協助您解決的疑問，歡迎您隨時與我們聯絡，我們將於服務時間內回覆您。
                  </p>
                  <ul>
                    <li>服務時間：MON - FRI 09-18</li>
                    <li>連絡電話：<a href="tel:+886-2-3456789">02-345-6789</a></li>
                    <li>電子信箱：<a href="mailto:wontbereply@gmail.com">wontbereply@gmail.com</a></li>
                    <li>聯絡地址：110台北市信義區信義路五段7號</li>
                  </ul>
                  <div class="mt-1 text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0079554826816!2d121.56236741484187!3d25.03380408397246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1634269019703!5m2!1szh-TW!2stw"
                      width="300"
                      height="225"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-white">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#notice"
                    aria-expanded="true"
                    aria-controls="notice"
                  >
                    NOTICE
                  </button>
                </h2>
              </div>
              <div id="notice" class="collapse" data-parent="#faq">
                <div class="card-body">
                  <ul>
                    <li>
                      商品如需追加，等待期約7-30個工作天(不含假日)，建議您下單前多加考慮，謝謝您。
                    </li>
                    <li>
                      商品顏色會因個人顯示螢幕、解析度、色調、亮度不同而有所差異，商品皆以實品為準。
                    </li>
                    <li>
                      每件商品皆平放測量，仍可能因不同批製作、材質、彈性、或測量點等因素，實際尺寸±3cm為正常範圍，不屬於瑕疵。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-white">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#returns"
                    aria-expanded="false"
                    aria-controls="returns"
                  >
                    RETURNS&REFUNDS
                  </button>
                </h2>
              </div>
              <div id="returns" class="collapse" data-parent="#faq">
                <div class="card-body">
                  <ul>
                    <li>
                      若有尺寸不合或未符期望，可選擇於七日鑑賞期內辦理部分或整筆退貨後再重新訂購。
                    </li>
                    <li>
                      七日鑑賞期計算為簽收隔日算起七日內，鑑賞期不為試用期，還請留意請保持商品全新狀態。
                      超商為取件隔日算第一天。黑貓宅配為簽收隔日算第一天，不論是否為買家本人簽收（管理員／家人等）還請務必留意。
                    </li>
                    <li>
                      若於七日內需加退商品，請自行負擔寄送運費。
                      為避免爭議發生，請確實收到商品後再進行退貨，商品優惠恕無法合併訂單計算。
                    </li>
                    <li>
                      如遇取件資料遲遲未更新狀況，還請您務必於收取包裹七日內盡快與客服人員聯繫以便協助處理，避免影響退貨權益。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header bg-white">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#privacy"
                    aria-expanded="false"
                    aria-controls="privacy"
                  >
                    PRIVACY POLICY
                  </button>
                </h2>
              </div>
              <div id="privacy" class="collapse" data-parent="#faq">
                <div class="card-body">
                  <p>
                    當您成為本網站的會員時，即表示您已詳細閱讀、明確瞭解並同意接受本「免責聲明」之所有內容，下列情況發生時本網站毋須負擔任何責任：
                  </p>
                  <ul>
                    <li>
                      本網站服務之風險會由您個人承擔，會員同意使用本網站各項服務基於會員的個人意願並同意自負任何風險，包括因自本網站下載資料或圖片，或自本網站服務中獲得之資料導致發生任何資源流失等結果。
                    </li>
                    <li>
                      會員在本網站填寫的物件資料、個人資料、上傳圖片等行為，純屬會員個人行為，本網站對其內容之真實性或完整性不負任何責任。
                    </li>
                    <li>
                      任何由於電腦病毒侵入或發作、因政府管制而造成暫時性關閉等影響網路正常經營之不可抗力而造成的資料毀損、丟失、被盜與用或被竄改等官網無關。
                    </li>
                    <li>
                      本網站就各項服務不負任何明示或默示之擔保責任。本網站不保證各項服務之穩定、安全、無誤及不中斷；會員明示承擔使用官網服務之所有風險極可能發生之任何損害。
                    </li>
                    <li>
                      維持並更新您個人會員資料，確保其為正確、最新及完整。若您提供任何錯誤、不實或不完整的資料，本網站有權暫停或終止您的帳號，並拒絕您使用本服務之全部或部分。
                    </li>
                    <li>
                      對於會員透過本網站刊登或發布虛假、違法資訊、侵害他人權益及欺騙、敲詐行為者，純屬會員個人行為，本網站對此而產生的一切糾紛不承擔任何責任。
                    </li>
                  </ul>
                  <div class="text-right">特此聲明</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
