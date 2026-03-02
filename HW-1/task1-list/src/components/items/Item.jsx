import { memo } from "react";

const Item = memo(function Item(props) {
  //log 3 : item
  console.log("Render Item:", props.titulo);

  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="item-content">
            <h4>{props.titulo}</h4>
            <div className="item-actions">
              <button 
                className="btn-like" 
                onClick={() => props.onLike(props.id)}
              >
                ❤️ {props.likes}
              </button>
              <button 
                className="btn-delete" 
                onClick={() => props.onDelete(props.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Item;
