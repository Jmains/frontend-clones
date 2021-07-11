import s from "./Studios.module.css";

export default function Studios() {
  return (
    <div className={s.studios__container}>
      <div role="link" className={s.studios__link}>
        {/* Bisney */}
        <img
          className={s.studios__img}
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png"
          alt=""
        />
        <video className={s.studios__video} muted loop autoPlay playsInline>
          <source
            type="video/mp4"
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"
          ></source>
        </video>
      </div>
      <div role="link" className={s.studios__link}>
        {/* Bixar */}
        <img
          className={s.studios__img}
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png"
          alt=""
        />
        <video className={s.studios__video} muted loop autoPlay playsInline>
          <source
            type="video/mp4"
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4"
          ></source>
        </video>
      </div>
      <div role="link" className={s.studios__link}>
        {/* Barvel */}
        <img
          className={s.studios__img}
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png"
          alt=""
        />
        <video className={s.studios__video} muted loop autoPlay playsInline>
          <source
            type="video/mp4"
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4"
          ></source>
        </video>
      </div>
      <div role="link" className={s.studios__link}>
        {/* Bar Wars */}
        <img
          className={s.studios__img}
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png"
          alt=""
        />
        <video className={s.studios__video} muted loop autoPlay playsInline>
          <source
            type="video/mp4"
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229455-star-wars.mp4"
          ></source>
        </video>
      </div>
      <div role="link" className={s.studios__link}>
        {/* Bashional Beographic */}
        <img
          className={s.studios__img}
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png"
          alt=""
        />
        <video className={s.studios__video} muted loop autoPlay playsInline>
          <source
            type="video/mp4"
            src="https://vod-bgc-na-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}
