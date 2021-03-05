import React from 'react'

const Loader = (props) => {
  return (
    <div className={`loading-overlay`}>
      <div className='loading-spinner'>
        <div className='lds-eclipse'>
          <div />
        </div>
      </div>

      <style>
        {`
        
  .loading-overlay {
	width: 100%;
	height: 200px;
	bottom: 0;
	left: 0;
	background-color: #000;
	opacity: 0.4;
	z-index: 10005;
}

.for-transition {
	display: none;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
}

@keyframes lds-eclipse {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@-webkit-keyframes lds-eclipse {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.lds-eclipse div {
	animation: lds-eclipse 0.5s linear infinite;
	width: 40px;
	height: 40px;
	top: 80px;
	left: 80px;
	border-radius: 50%;
	box-shadow: 0 4px 0 0 #007aff;
	transform-origin: 20px 22px;
}

.lds-eclipse {
  position: relative;
	height: 200px !important;
}

.loading-spinner {
	position: absolute;
	left: 50%;
	transform: translate(-50%, 50%);
}
        `}
      </style>
    </div>
  )
}

export default Loader