import React from "react";
const SearchContainer = (props) => {
  return (
    // <div className={"SearchContainer"}>
    //   Thank you for searching {props.searchedChannel.name}, we connot wait for
    //   you to join!
    //   <div onClick={() => props.handleJoinChannel(props.searchedChannel)}>
    //     <a class="Join" href="#join" type="click">
    //       Join
    //     </a>
    //   </div>
    // </div>
    <div>
      <div
        class="modal fade"
        id="modalLoginForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h4 class="modal-title w-100 font-weight-bold">Channel</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div>
              Thank you for searching {props.searchedChannel.name}, we connot
              wait for you to join!
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-default">Join</button>
          </div>
        </div>
      </div>

      <div class="text-center">
        <a
          href=""
          class="btn btn-default btn-rounded mb-4"
          data-toggle="modal"
          data-target="#modalLoginForm"
        >
          Launch Modal Join Form
        </a>
      </div>
    </div>
  );
};
export default SearchContainer;
