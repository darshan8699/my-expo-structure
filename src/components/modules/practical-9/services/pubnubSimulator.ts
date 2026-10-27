type LocationListener = (message: { latitude: number; longitude: number; heading?: number }) => void

class LocationChannel {
    private listeners: LocationListener[] = []
    private lastLocation: { latitude: number; longitude: number; heading?: number } = {
        latitude: 37.78825,
        longitude: -122.4324,
        heading: 45,
    }

    subscribe(listener: LocationListener) {
        this.listeners.push(listener)
        // Immediately notify with current location
        listener(this.lastLocation)
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener)
        }
    }

    publish(data: { latitude: number; longitude: number; heading?: number }) {
        this.lastLocation = data
        this.listeners.forEach((listener) => {
            try {
                listener(data)
            } catch (err) {
                console.warn('LocationChannel error:', err)
            }
        })
    }

    getLastLocation() {
        return this.lastLocation
    }
}

export const PubNubLocationService = new LocationChannel()
