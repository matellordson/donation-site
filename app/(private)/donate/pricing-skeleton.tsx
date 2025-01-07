"use client";

export function PricingSkeleton({ isGrid = false }: { isGrid?: boolean }) {
  return (
    <div className="w-full animate-pulse space-y-7 rounded-lg border p-5">
      <div className="">
        <div className="h-6 w-1/2 rounded bg-muted"></div>
        <div className="mt-2 h-4 w-2/3 rounded bg-muted"></div>
      </div>
      {isGrid ? (
        <GridSkeleton />
      ) : (
        <div className="space-y-4">
          <div className="h-8 w-2/3 rounded bg-muted"></div>
          <div className="h-10 w-1/2 rounded bg-muted"></div>
        </div>
      )}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="h-10 rounded bg-muted"></div>
      ))}
    </div>
  );
}
