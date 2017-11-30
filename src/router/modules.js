import React from 'react'

import Bundle from '@/components/common/Bundle'

import loadForgetpwd from 'bundle-loader?lazy&name=[name]!@/pages/forgetpwd'
import loadSetRejected from 'bundle-loader?lazy&name=[name]!@/pages/setRejected'
import loadIndex from 'bundle-loader?lazy&name=[name]!@/pages/index'
import loadDemo1 from 'bundle-loader?lazy&name=[name]!@/pages/demo1'
import loadDemo2 from 'bundle-loader?lazy&name=[name]!@/pages/demo2'
import loadDemo3 from 'bundle-loader?lazy&name=[name]!@/pages/demo3'
import loadLogin from 'bundle-loader?lazy&name=[name]!@/pages/login'
import loadNoMatch from 'bundle-loader?lazy&name=[name]!@/pages/noMatch'
import loadDashBoard from 'bundle-loader?lazy&name=[name]!@/pages/dashboard'
import loadDeclearTax from 'bundle-loader?lazy&name=[name]!@/pages/declearTax' // 申报列表
import loadDeclearResult from 'bundle-loader?lazy&name=[name]!@/pages/declear/result' // 查看申报结果
import loadDeclearPayment from 'bundle-loader?lazy&name=[name]!@/pages/declear/payment' // 申报缴款
import loadDeclearPaymentResult from 'bundle-loader?lazy&name=[name]!@/pages/declear/paymentResult' // 查看缴款结果
import loadDeclearVoucher from 'bundle-loader?lazy&name=[name]!@/pages/declear/Voucher' // 查看缴款结果

export const Index = (props) => (
  <Bundle load={loadIndex}>
    {(Index) => <Index {...props}/>}
  </Bundle>
)
export const NoMatch = (props) => (
  <Bundle load={loadNoMatch}>
    {(NoMatch) => <NoMatch {...props}/>}
  </Bundle>
)
export const Demo1 = (props) => (
  <Bundle load={loadDemo1}>
    {(Demo1) => <Demo1 {...props}/>}
  </Bundle>
)
export const Demo2 = (props) => (
  <Bundle load={loadDemo2}>
    {(Demo2) => <Demo2 {...props}/>}
  </Bundle>
)
export const Demo3 = (props) => (
  <Bundle load={loadDemo3}>
    {(Demo3) => <Demo3 {...props}/>}
  </Bundle>
)
export const Login = (props) => (
  <Bundle load={loadLogin}>
    {(Login) => <Login {...props}/>}
  </Bundle>
)
export const Forgetpwd = (props) => (
  <Bundle load={loadForgetpwd}>
    {(Forgetpwd) => <Forgetpwd {...props}/>}
  </Bundle>
)
export const DashBoard = (props) => (
  <Bundle load={loadDashBoard}>
    {(DashBoard) => <DashBoard {...props}/>}
  </Bundle>
)
export const DeclearTax = (props) => (
  <Bundle load={loadDeclearTax}>
    {(DeclearTax) => <DeclearTax {...props}/>}
  </Bundle>
)
export const DeclearResult = (props) => (
  <Bundle load={loadDeclearResult}>
    {(DeclearResult) => <DeclearResult {...props}/>}
  </Bundle>
)
export const SetRejected = (props) => (
  <Bundle load={loadSetRejected}>
    {(SetRejected) => <SetRejected {...props}/>}
  </Bundle>
)
export const DeclearPaymentResult = (props) => (
  <Bundle load={loadDeclearPaymentResult}>
    {(DeclearPaymentResult) => <DeclearPaymentResult {...props}/>}
  </Bundle>
)
export const DeclearPayment = (props) => (
  <Bundle load={loadDeclearPayment}>
    {(DeclearPayment) => <DeclearPayment {...props}/>}
  </Bundle>
)
export const DeclearVoucher = (props) => (
  <Bundle load={loadDeclearVoucher}>
    {(DeclearVoucher) => <DeclearVoucher {...props}/>}
  </Bundle>
)
