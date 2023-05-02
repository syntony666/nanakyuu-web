import FooterComponent from "./footer";
import TopbarComponent from "./topbar";

interface Prop {
  element: JSX.Element;
}

export default function ContainerComponent({ element }: Prop) {
  return (
    <>
      <TopbarComponent />
      <div className="ts-content is-vertically-padded">
        <div className="ts-container is-narrow">
          <div className="ts-app-layout is-full">
            <div className="cell is-fluid is-vertical">
              <div className="cell is-fluid">
                {/* 注意顯示條 */}
                <div className="ts-notice is-dense">
                  <div className="title">注意</div>
                  <div className="content">
                    目前網站正在施工中，價目表非真實委託價格
                  </div>
                </div>

                {element}
                <div className="ts-space is-large" />
              </div>
              <div className="cell">
                <FooterComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
