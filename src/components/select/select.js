import React, { useState } from "react";

const Select = () => {
  const [number, setNumber] = useState("+38(077)7777777");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  return (
    <div>
      <div>
        <h1>Введите свой номер телефона</h1>
        <span style={{ fontSize: "30px", fontWeight: "500" }}>+38(</span>
        <select onChange={(e) => setA(e.target.value)} className="0">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setB(e.target.value)} className="9">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setC(e.target.value)} className="3">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <span style={{ fontSize: "30px", fontWeight: "500" }}>)</span>
        <select onChange={(e) => setD(e.target.value)} className="0">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setE(e.target.value)} className="9">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setF(e.target.value)} className="0">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setG(e.target.value)} className="4">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setH(e.target.value)} className="1">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setI(e.target.value)} className="6">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <select onChange={(e) => setJ(e.target.value)} className="2">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <button
          style={{
            width: "100px",
            height: "40px",
            fontSize: "30px",
            fontWeight: "500",
            borderRadius: "20px",
            marginLeft: "50px",
          }}
          onClick={() => {
            setNumber("+38(077)7777777");
          }}>
          Del
        </button>
        <button
          style={{
            width: "100px",
            height: "40px",
            fontSize: "30px",
            fontWeight: "500",
            borderRadius: "20px",
            marginLeft: "10px",
          }}
          onClick={() =>
            setNumber(`+38(${a}${b}${c})${d}${e}${f}${g}${h}${i}${j}`)
          }>
          Send
        </button>
        <div>
          <h1>My fone : {number}</h1>
        </div>
      </div>
    </div>
  );
};

export default Select;
