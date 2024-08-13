-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" VARCHAR(10) NOT NULL,
    "number" INTEGER NOT NULL,
    "options" JSONB,
    "dependsOnId" TEXT,
    "constraints" JSONB,
    "suggestions" JSONB,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Question_dependsOnId_idx" ON "Question"("dependsOnId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_text_number_key" ON "Question"("text", "number");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_dependsOnId_fkey" FOREIGN KEY ("dependsOnId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
