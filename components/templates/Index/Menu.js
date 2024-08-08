import Card from "@/components/modules/Card/Card";

function Menu({ data }) {

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Menu & Pricing</h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5 text-center">* Hot Coffee *</h1>
            {data?.filter(menu => menu.type === "hot").slice(0, 3).map(menu => <Card key={menu.id} {...menu} />)}

          </div>
          <div className="col-lg-6">
            <h1 className="mb-5 text-center">* Cold Coffee *</h1>
            {data?.filter(menu => menu.type === "cold").slice(0, 3).map(menu => <Card key={menu.id} {...menu} />)}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
