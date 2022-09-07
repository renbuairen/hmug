function toast(title, icon, duration = 3000) {
  uni.showToast({
    title,
    icon,
    duration
  })
}

toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}

toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}

export default toast
