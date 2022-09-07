function toast(title, icon, duration = 3000) {
  uni.showToast({
    title,
    icon: 'none',
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

toast.loading = function() {
  uni.showToast({
    title: '加载中',
    icon: "loading",
  })
}

export default toast
